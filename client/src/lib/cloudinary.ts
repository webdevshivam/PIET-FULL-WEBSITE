export interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
  format: string;
  resource_type: string;
}

export const uploadImageToCloudinary = async (file: File): Promise<string | null> => {
  // Use the secure upload method for consistency
  return uploadImageToCloudinarySecure(file);
};

export const uploadImageToCloudinarySecure = async (file: File): Promise<string | null> => {
  try {
    console.log('Starting Cloudinary upload for file:', file.name);

    // Validate file
    if (!file) {
      throw new Error('No file provided');
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      throw new Error('File size too large (max 10MB)');
    }

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Invalid file type. Only JPEG, PNG, and WebP are allowed');
    }

    // Get signature from backend
    const token = localStorage.getItem('adminToken');
    if (!token) {
      throw new Error('No authentication token found');
    }

    console.log('Getting signature from backend...');
    const signatureResponse = await fetch('/api/cloudinary-signature', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!signatureResponse.ok) {
      const errorData = await signatureResponse.json().catch(() => ({}));
      throw new Error(`Failed to get signature: ${errorData.message || signatureResponse.statusText}`);
    }

    const signatureData = await signatureResponse.json();
    console.log('Got signature data:', signatureData);

    // Validate signature data
    if (!signatureData.signature || !signatureData.timestamp || !signatureData.api_key) {
      throw new Error('Invalid signature data received from server');
    }

    // Upload to Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('signature', signatureData.signature);
    formData.append('timestamp', signatureData.timestamp.toString());
    formData.append('api_key', signatureData.api_key);
    formData.append('folder', signatureData.folder || 'piet');

    console.log('Uploading to Cloudinary...');
    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${signatureData.cloud_name}/image/upload`,
      {
        method: 'POST',
        body: formData
      }
    );

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();
      console.error('Cloudinary upload failed:', errorText);
      throw new Error(`Upload failed: ${uploadResponse.statusText}`);
    }

    const uploadResult = await uploadResponse.json();
    console.log('Upload successful:', uploadResult);

    if (!uploadResult.secure_url) {
      throw new Error('No secure URL returned from Cloudinary');
    }

    return uploadResult.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
};

export const uploadMultipleImagesToCloudinary = async (files: File[]): Promise<string[]> => {
  try {
    const uploadPromises = files.map(file => uploadImageToCloudinarySecure(file));
    const results = await Promise.all(uploadPromises);
    return results.filter((url): url is string => url !== null);
  } catch (error) {
    console.error('Error uploading multiple images:', error);
    return [];
  }
};
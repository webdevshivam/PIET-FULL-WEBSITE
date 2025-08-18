import crypto from 'crypto';
import { v2 as cloudinary } from 'cloudinary';

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'ddygzamv4',
  api_key: process.env.CLOUDINARY_API_KEY || '865455367323563',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'K3Tl1-sCKXUo7pOWLRexJuQk9DU',
});

export const generateCloudinarySignature = (timestamp: number, folder?: string): string => {
  let params = `timestamp=${timestamp}`;
  if (folder) {
    params += `&folder=${folder}`;
  }
  params += process.env.CLOUDINARY_API_SECRET || 'WiXKTlHhEVWaRjJeCFAr-wPZqmw';
  return crypto.createHash('sha1').update(params).digest('hex');
};

export const createCloudinarySignatureEndpoint = (req: any, res: any) => {
  try {
    const { timestamp, folder } = req.body;

    if (!timestamp) {
      return res.status(400).json({ error: 'Timestamp is required' });
    }

    const signature = generateCloudinarySignature(timestamp, folder);

    res.json({
      signature,
      timestamp,
      api_key: process.env.CLOUDINARY_API_KEY || '854793951176831',
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'ddygzamv4',
    });
  } catch (error) {
    console.error('Error generating Cloudinary signature:', error);
    res.status(500).json({ error: 'Failed to generate signature' });
  }
};

export { cloudinary };
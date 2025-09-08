'use client';
import { useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';

import { getCroppedImg } from './getCroppedImage';
import { getCroppedBlob } from './getCroppedBlob';

export default function ImageCropper({ imageUrl, giveImageData, cropMode }: { imageUrl: string, giveImageData: (data: any) => void, cropMode: any }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const handleSave = async() => {
    const croppedImg = await getCroppedImg(imageUrl, croppedAreaPixels)
    const croppedBlob = await getCroppedBlob(imageUrl, croppedAreaPixels)

    giveImageData(
      {
        croppedImg: croppedImg,
        croppedBlob: croppedBlob,
      }
    )
    cropMode.setFalse();
  } 
  
  return (
    <div className="relative w-full h-full bg-black">
      <Cropper
        image={imageUrl}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={(_, croppedAreaPixels: Area) => setCroppedAreaPixels(croppedAreaPixels)}
      />
      <div className="absolute top-0 right-0 z-10">
        <button 
        onClick={handleSave}
        className="px-3 py-1 font-sans text-lg text-white">Save</button>
      </div>
    </div>
  );
}

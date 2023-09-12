import React, { ChangeEvent, useState } from 'react';

const UserProfileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    // Perform validation for image format here if needed
    const allowedFormats: string[] = ['image/jpeg', 'image/png'];
    if (file && !allowedFormats.includes(file.type)) {
      alert('Please select a JPEG or PNG image.');
      return;
    } else setSelectedFile(file || null);

    
  };

  return (
    <div>
      <input
        type="file"
        className="rounded border border-gray-800 px-2 py-1 w-full"
        value=''
        accept="image/jpeg, image/png"
        onChange={handleFileInputChange}
      />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default UserProfileUpload;

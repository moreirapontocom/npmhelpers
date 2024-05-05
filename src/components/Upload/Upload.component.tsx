import { useRef, useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable, } from 'firebase/storage';
import { Loading, Separator, generateRandomString } from "../../";

const Upload = (props: any) => {
  const {
    storage,
    accept,
    folder,
    showProgress,
    loading,
    onUpload,
  } = props;

  const inputFile: any = useRef<HTMLInputElement>(null);
  const [loadingUploadFile, setLoadingUploadFile] = useState(false);
  const [progress, setProgress] = useState(0);

  const _uploadFile = (e: any): any => {
    const file = e;
    if (!file) return;
    const acceptExtensions: any = accept ? accept.split(',').map((item: any) => item.split('/').pop()) : [];
    const extension: string = file.name.substring(file.name.lastIndexOf('.') + 1, file.name.length) || "pdf";

    if (acceptExtensions.length > 0 && !acceptExtensions.includes(extension)) {
      alert(`Invalid file extension. Accepted extensions are: ${acceptExtensions.join(', ')}`);
      return;
    }

    const generatedName: string = `${generateRandomString(20)}.${extension}`;

    const fileDetails: any = {
      fileName: file.name,
      folder: folder || "",
      contentType: file.type || "application/pdf",
      size: file.size,
      extension,
      generatedName,
    }

    setLoadingUploadFile(true);
    setProgress(0);

    // If we don't want to send the file to storage,
    // We just return the file details and content

    if (!storage) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        onUpload({
          ...fileDetails,
          content: e.target.result,
        });
        setLoadingUploadFile(false);
        inputFile.current.value = "";
      };
      reader.readAsText(file);
      return;
    }

    const storageRef: any = ref(storage, `${folder}/${generatedName}`);
    const uploadTask: any = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot: any) => {
      const progress: number = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(progress);
    }, (error: any) => {
      console.log("Error when uploading file", error);
      setLoadingUploadFile(false);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
        onUpload({
          ...fileDetails,
          downloadURL,
        });
        setLoadingUploadFile(false);
        setProgress(0);
        inputFile.current.value = "";
      });
    });
  }

  return <>
    <input
      ref={inputFile}
      onChange={(e: any) => _uploadFile(e.target.files[0])}
      type="file"
      accept={accept || "*"}
      disabled={loading || loadingUploadFile}
      className="form-control" />

      <Separator size={5} />

      <Loading loading={loadingUploadFile} parent="inline" color="text-primary" />

      {loadingUploadFile && showProgress && <>
        <Separator size={5} />
        <small className="text-muted">{progress}%</small>
      </>}
  </>
};

export default Upload;

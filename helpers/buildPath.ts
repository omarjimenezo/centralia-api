import { filesData, imagesBusiness } from "../interfaces/common-interface";

export const buildSinglePath = (data: any, file: any) => {
  let avatarImgPath: string = "";
  if (file) {
    const { filename, destination } = file;
    avatarImgPath = `/${destination}/${filename}`;
    data.avatar = avatarImgPath;
  } else {
    data.avatar = avatarImgPath;
  }
  return data;
};

export const buildMultiplePaths = (body: any, files: any) => {
  let dataWithPaths: imagesBusiness = { logo: "", fachada: "" };
  if (Object.keys(files).length > 0) {
    for (const key in files) {
      const values = files[key];
      values.map(({ filename, destination }: filesData) => {
        dataWithPaths[
          key as keyof typeof dataWithPaths
        ] = `/${destination}/${filename}`;
      });
    }
  }
  return (dataWithPaths = { ...body, ...dataWithPaths });
};

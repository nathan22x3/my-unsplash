import axiosClient from 'configs/axios.config';
import { Photo } from 'interfaces/photo.interface';

const photoApi = {
  getAll: async (): Promise<Array<Photo>> => {
    const url = 'photos/all';
    return await axiosClient.get(url);
  },
  addNew: async (data: Photo): Promise<Photo> => {
    const url = 'photos/add';
    try {
      return await axiosClient.post(url, data);
    } catch (error) {
      throw new Error(error as string).message;
    }
  },
};

export default photoApi;

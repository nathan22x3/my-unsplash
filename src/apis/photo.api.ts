import axiosClient from 'configs/axios.config';
import { Photo } from 'interfaces/photo.interface';

const photoApi = {
  getAll: async (): Promise<Array<Photo>> => {
    const url = '/photos/all';
    return await axiosClient.get(url);
  },
  addNew: async (data: Photo): Promise<Photo> => {
    const url = '/photos/add';
    return await axiosClient.post(url, data);
  },
  deleteById: async (id: string): Promise<Photo> => {
    const url = `/photos/delete/${id}`;
    return await axiosClient.delete(url);
  },
};

export default photoApi;

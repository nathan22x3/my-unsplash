import axiosClient from 'configs/axios.config';
import { Photo } from 'interfaces/photo.interface';

export type PhotosResponse = {
  data: Array<Photo>;
  limit: number;
  next_cursor: string;
};

const photoApi = {
  getWithLimit: async (limit: number = 10, next_cursor?: string): Promise<PhotosResponse> => {
    const url = `/photos`;
    return await axiosClient.get(url, {
      params: {
        limit,
        next_cursor,
      },
    });
  },
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

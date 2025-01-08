import { useMutation, useQuery } from '@tanstack/react-query';

import { request } from '@/service/http';

import CONSTANTS from '../../constants';

/** 获取项目列表 */
export const useGetAllProjects = (params: IND_NORMAL.IProjectListRequest) => {
  return useQuery({
    queryKey: [CONSTANTS.TOXICOLOGY_IND_PROJECT_LIST, params],
    queryFn: () =>
      request<API.IRestModal<IND_NORMAL.IProjectListResponse>>('/projects', {
        method: 'GET',
        params,
      }),
  });
};

/** 获取项目信息详情 */
export const useGetProjectInfo = (id: string) => {
  return useQuery({
    queryKey: [CONSTANTS.TOXICOLOGY_IND_PROJECT_INFO_DETAIL, id],
    queryFn: () =>
      request<API.IRestModal<IND_NORMAL.IProjectItem>>('/project', {
        method: 'GET',
        params: { project_id: +id },
      }),
    enabled: id !== 'new',
  });
};

/** 上传文件 */
export const useUploadFile = () => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request<API.IRestModal<IND_NORMAL.IUploadFileResponse>>('/project/upload', {
        method: 'POST',
        data,
      }),
  });
};

/** 保存项目 */
export const useSaveProject = () => {
  return useMutation({
    mutationFn: (data: IND_NORMAL.ISaveProjectRequest) =>
      request<API.IRestModal<{ id: number }>>('/project/save', {
        method: 'POST',
        data,
      }),
    onError: (error: API.IError) => {
      console.error(error.response.data.msg);
    },
  });
};

/** 生成项目 */
export const useGenerateProject = () => {
  return useMutation({
    mutationFn: (data: IND_NORMAL.ICreateProjectRequest) =>
      request<API.IRestModal<IND_NORMAL.IProjectItem>>('/project/generate', {
        method: 'POST',
        data,
      }),
    onError: (error: API.IError) => {
      console.error(error.response.data.msg);
    },
  });
};

/** 停止生成 */
export const useStopGenerate = () => {
  return useMutation({
    mutationFn: (data: { project_id: number }) =>
      request<API.IRestModal<null>>('/project/generate/stop', {
        method: 'POST',
        data,
      }),
    onError: (error: API.IError) => {
      console.error(error.response.data.msg);
    },
  });
};

/** 获取项目生成状态 */
export const useGetProjectGenerateStatus = () => {
  return useMutation({
    mutationFn: (id: number) =>
      request<API.IRestModal<IND_NORMAL.IGenerateStatusResponse>>('/project/generate/status', {
        method: 'GET',
        params: { project_id: id },
      }),
  });
};

/** 删除项目 */
export const useDeleteProject = () => {
  return useMutation({
    mutationFn: (id: number) =>
      request<API.IRestModal<null>>(`/project/${id}`, {
        method: 'DELETE',
      }),
    onError: (error: API.IError) => {
      console.error(error.response.data.msg);
    },
  });
};

export default {
  useGetAllProjects,
  useUploadFile,
  useGenerateProject,
  useGetProjectInfo,
  useSaveProject,
  useStopGenerate,
  useGetProjectGenerateStatus,
  useDeleteProject,
};

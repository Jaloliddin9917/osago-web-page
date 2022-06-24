import { useQuery, useMutation } from "react-query";  
import { request } from "./request";  

export const useQueryData = (page) => {
  return useQuery("repoData", () => {
    return request ({url: `/airlines?_limit=9&_page=${page}`, method: 'get'})
  })
};

export const useQueryDataById = (id) => {
  return useQuery("repoDatas", () => {
    return request ({url: `/airlines/${id}`, method: 'get'})
  })
};

export const useAddData = () => {
  return useMutation((post) => {
    return request({url: '/airlines', method: 'post', data: post});
  });
};

export const useQueryUpdate = (id) => {
  return useMutation((post) => {
    return request({url: `/airlines/${id}`, method: 'put', data: post});
  });
};

export const useQueryDelete = (id) => {
  return useMutation(() => {
    return request({url: `/airlines/${id}`, method: 'delete'});
  });
};

export const useQueryTableDelete = () => {
  return useMutation((id) => {
    return request({url: `/airlines/${id}`, method: 'delete'});
  });
};

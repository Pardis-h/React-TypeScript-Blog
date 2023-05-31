import { useState } from "react";
import { TDeleteApiResponse, TGetApiResponse, TPostApiResponse, TPutApiResponse } from "../types/public.types";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const backEndURL: string = "http://localhost:3700";

export const useApiPost = (): TPostApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const postAPIData = async (
    path: string,
    body: object = {},
    option: AxiosRequestConfig = {}
  ): Promise<void> => {
    setLoading(true);
    try {
      const axiosRes = await axios.post(`${backEndURL}${path}`, body, option);
      setData(axiosRes?.data);
      setStatus(axiosRes?.status);
      setStatusText(axiosRes?.statusText);
      setError('');
    } catch (err: AxiosError | any) {
      setError(err?.response?.data?.message);
      setStatus(err?.response?.data?.status || 500);
      setStatusText(err?.response?.data?.statusText || 'ErroR');
      // console.log(err);
      
    }
    setLoading(false);
  };
  return {
    status,
    statusText,
    data,
    error,
    loading,
    postAPIData,
  };
};

export const useApiPut = (): TPutApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const putAPIData = async (
    path: string,
    body: object = {},
    option: AxiosRequestConfig = {}
  ): Promise<void> => {
    setLoading(true);
    try {
      const axiosRes = await axios.put(`${backEndURL}${path}`, body, option);
      setData(axiosRes?.data);
      setStatus(axiosRes?.status);
      setStatusText(axiosRes?.statusText);
      setError('');
    } catch (err: AxiosError | any) {
      setError(err?.response?.data?.message);
      setStatus(err?.response?.data?.status || 500);
      setStatusText(err?.response?.data?.statusText || 'ErroR');
      // console.log(err);
      
    }
    setLoading(false);
  };
  return {
    status,
    statusText,
    data,
    error,
    loading,
    putAPIData,
  };
};

export const useApiGet = (): TGetApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const getAPIData = async (
    path: string,
    // body: object = {},
    option: AxiosRequestConfig = {}
  ): Promise<void> => {
    setLoading(true);
    try {
      const axiosRes = await axios.get(`${backEndURL}${path}`, option);
      setData(axiosRes?.data);
      setStatus(axiosRes?.status);
      setStatusText(axiosRes?.statusText);
      setError('');
    } catch (err: AxiosError | any) {
      setError(err?.response?.data?.message);
      setStatus(err?.response?.data?.status || 500);
      setStatusText(err?.response?.data?.statusText || 'ErroR');
    }
    setLoading(false);
  };
  return {
    status,
    statusText,
    data,
    error,
    loading,
    getAPIData,
  };
};

export const useApiDelete = (): TDeleteApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const deleteAPIData = async (
    path: string,
    option: AxiosRequestConfig = {}
  ): Promise<void> => {
    try {
      const axiosRes = await axios.delete(`${backEndURL}${path}`, option);
      setData(axiosRes?.data);
      setStatus(axiosRes?.status);
      setError('');
    } catch (err: AxiosError | any) {
      setError(err?.response?.data?.message);
      setStatus(err?.response?.data?.status || 500);
    }
  };
  return {
    status,
    data,
    error,
    deleteAPIData
  };
};


import { URL_API_AUTH_LOGIN, URL_API_AUTH_REGISTER, URL_API_CLIENT_CLIENTS } from "@/config/api.config";
import { UserProps } from "@/interfaces/User.interface";
import axios, { AxiosInstance } from "axios";
import { NextResponse } from "next/server";

const api: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer huehue',
  },
});

export async function RegisterClient(data: UserProps) {
  console.log('data', data);
  const response = await api.post(
    URL_API_AUTH_REGISTER,
    data
  );

  return NextResponse.json({ response });
}

export async function GetClients() {
  const response = await api.get(
    URL_API_CLIENT_CLIENTS
  );

  return NextResponse.json({ response });
}

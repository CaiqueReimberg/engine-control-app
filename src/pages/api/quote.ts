import { URL_API_AUTH_LOGIN, URL_API_AUTH_REGISTER, URL_API_CLIENT_CLIENTS, URL_API_QUOTE_APPROVE, URL_API_QUOTE_PROD_APPROVE, URL_API_QUOTE_QUALITY_APPROVE, URL_API_QUOTE_QUOTE } from "@/config/api.config";
import { UserProps } from "@/interfaces/User.interface";
import axios, { AxiosInstance } from "axios";
import { NextResponse } from "next/server";

const api: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer huehue',
  },
});

export async function RegisterQuote(data: any) {
  const response = await api.post(
    URL_API_QUOTE_QUOTE,
    data
  );

  return NextResponse.json({ response });
}

export async function GetQuotes() {
  const response = await api.get(
    URL_API_CLIENT_CLIENTS
  );

  return NextResponse.json({ response });
}

export async function ApproveQuality(id: string) {
  const response = await api.patch(
    `${URL_API_QUOTE_QUALITY_APPROVE}/${id}`
  );

  return NextResponse.json({response});
}

export async function ApproveQuote(id: string) {
  const response = await api.patch(
    `${URL_API_QUOTE_APPROVE}/${id}`
  );

  return NextResponse.json({response});
}

export async function ApproveProd(id: string) {
  const response = await api.patch(
    `${URL_API_QUOTE_PROD_APPROVE}/${id}`
  );

  return NextResponse.json({response});
}


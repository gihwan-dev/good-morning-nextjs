"use client";

import { CLIENT_SIDE_SERVER_URL } from "@/lib/const";
import useSWR, { Fetcher } from "swr";

interface SentenceList {
  sentences: string[];
}

const sentenceFetcher: Fetcher<SentenceList, string> = async (url: string) =>
  fetch(url).then(result => result.json());

export const useSentences = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `${CLIENT_SIDE_SERVER_URL}/sentence`,
    sentenceFetcher,
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

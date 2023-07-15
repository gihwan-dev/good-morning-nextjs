"use client";

import useSWR, { Fetcher } from "swr";

interface SentenceList {
  sentences: string[];
}

const sentenceFetcher: Fetcher<SentenceList, string> = async (url: string) =>
  fetch(url).then(result => result.json());

export const useSentences = () => {
  const { SERVER_URL } = process.env;

  const { data, error, isLoading, mutate } = useSWR(
    `${SERVER_URL}/sentence`,
    sentenceFetcher,
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

import client from './client';

export const GITHUB_API = {
  loadRepos: (subject) => client.get(`/search/repositories?q=${subject}`),
};

import { environment } from './environment';

export const endpoints = {
  sentiment: `${environment.apiFlask}/sentiment`,
  login: `${environment.apiNode}/login`,
  register: `${environment.apiNode}/register`,
  profile: `${environment.apiNode}/profile`,
  municipio: `${environment.apiNode}/municipio`,
};

const API_URL = 'http://localhost:8800/api';
const AUTH_REFRESH = '/auth/refresh';
const AUTH_LOGIN = '/auth/authorization';
const AUTH_REG = '/auth/registration';
const AUTH_LOGOUT = '/auth/logout';

const ANIMALS_GET = '/animals';
const ANIMALS_UPDATE = '/animals';
const TICKET_BUY = '/tickets/buy';
const TICKET_INFO = '/getIfo';
const TICKET_REPORT = '/reports/tickets';
const TICKET_REPORT_TXT = '/reports/tickets/download';

const ENCLOSURES_REPORT = '/reports/animals';
const ENCLOSURES_REPORT_TXT = '/reports/animals/download';
const ENCLOSURES_GET = '/animals/enclosures';

const CHECKUPS_REPORT = '/reports/medical';
const CHECKUPS_REPORT_TXT = '/reports/medical/download';

export {
  API_URL,
  AUTH_REFRESH,
  AUTH_REG,
  AUTH_LOGOUT,
  AUTH_LOGIN,
  ANIMALS_GET,
  ANIMALS_UPDATE,
  TICKET_BUY,
  TICKET_INFO,
  TICKET_REPORT,
  TICKET_REPORT_TXT,
  ENCLOSURES_REPORT,
  ENCLOSURES_REPORT_TXT,
  ENCLOSURES_GET,
  CHECKUPS_REPORT,
  CHECKUPS_REPORT_TXT,
};

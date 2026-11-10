import DOMPurify from 'dompurify';

export const sanitizeHtml = (dirty) =>
  DOMPurify.sanitize(typeof dirty === 'string' ? dirty : '', {
    ALLOWED_TAGS: [
      'p', 'br', 'b', 'strong', 'i', 'em',
      'u', 's', 'ul', 'ol', 'li', 'blockquote',
      'code', 'pre', 'a'
    ],
    ALLOWED_ATTR: ['href', 'title'],
    ALLOW_DATA_ATTR: false,
    ALLOW_ARIA_ATTR: false
  });
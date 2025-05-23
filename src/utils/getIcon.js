export function getIcon(name) {
  switch (name) {
    case 'tools':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;
    case 'tool':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.4 20a6.96 6.96 0 0 0 3.44-2.06 7.02 7.02 0 0 0 1.5-2.35 7.01 7.01 0 0 0-4.7-9.33 6.98 6.98 0 0 0-5.63 1.03 7.01 7.01 0 0 0-2.82 8.11 6.97 6.97 0 0 0 2.5 3.23 7.08 7.08 0 0 0 4.47 1.37z"></path><path d="M12.47 17.47 8.7 21.23a1 1 0 0 1-1.4 0l-2.36-2.36a1 1 0 0 1 0-1.4l3.77-3.77"></path></svg>`;
    case 'check-circle':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    case 'alert-circle':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
    default:
      return '';
  }
}

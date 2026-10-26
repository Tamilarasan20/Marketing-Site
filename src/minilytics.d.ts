// Minilytics tracker global (script tag in index.html). Always call it with
// optional chaining so pages never break when the script is blocked.
export {};

declare global {
  interface Window {
    minilytics?: ((cmd: 'goal' | 'identify' | 'pageview', a?: any, b?: any) => void) & {
      attribution?: () => { ml_visitor_id?: string; ml_session_id?: string };
    };
  }
}

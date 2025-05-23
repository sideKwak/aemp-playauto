export function decodeJWT(token: string): { exp: number } | null {
  try {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = atob(payloadBase64);
    return JSON.parse(decodedPayload);
  } catch (e) {
    console.error('JWT 디코딩 실패', e);
    return null;
  }
}
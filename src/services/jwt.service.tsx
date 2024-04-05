import * as jose from 'jose';

export const signJWT = async (data: any): Promise<any> => {
    const jwtSecretKey: string = process.env.REACT_APP_JWT_SECRET || "";
    const secret = new TextEncoder().encode(jwtSecretKey)
    const jwt = await new jose.SignJWT(data)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .sign(secret);
    return jwt;
};

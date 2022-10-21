export const successResponse = (res: any, data: any) => {
  return res.status(200).json(
    data
  );
};

export const errorResponse = (res: any, error: any) => {
  return res.status(500).json({
    status: 500,
    error,
  });
};

export const notFoundResponse = (res: any, error: any) => {
  return res.status(404).send({
    status: 404,
    error,
  });
};

export const badRequestResponse = (res: any, error: any) => {
  return res.status(400).send({
    status: 400,
    error,
  });
};

export const unauthorizedResponse = (res: any, error: any) => {
  return res.status(401).json({
    status: 401,
    error,
  });
};

export const forbiddenResponse = (res: any, error: any) => {
  return res.status(403).json({
    status: 403,
    error,
  });
};
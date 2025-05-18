import jwt from "jsonwebtoken";

//use user id to generate token
const generateToken = (id) => {
  // token must be returned to the client
  return jwt.sign({ id }, "26b533e053ee3956793281a4eb397827d4ede4f40dad3015aac9753c34d44e9a90418d73eca21745a0950df3832aa6a2571e9280092d4d2b36a6a8df556e06428ccd44b3e5de316873170cf4af0f1ace13c9e8a972fea8370a6d5bac0233c875f70522a8198b40fd15a931006c0c7d0a841c791fb62a1680b1afb7c028f3fe34b89725b01d06d49f026f836dd09263081107e44ff25751cc2d72f13a28afb898637bee81692785d490cbf0ff19408debbba1d441a6a5f2951abf7db2f9813144e889ad6f9c002ddd97a6cda7054d01d7e702b85e050a92be00a0cc88a1784920c3ca8761ebb5d94a19c45d1eeb987550eda0af503100ef78148cc6e04ccfeba9", {
    expiresIn: "30d",
  });
};

export default generateToken;

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = React.useState({ email: "", password: "" });
  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: isLoadingRegister,
      isSuccess: isSuccessRegister,
    },
  ] = useRegisterUserMutation();

  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: isLoadinglogin,
      isSuccess: isSuccesslogin,
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();

  const onChangeHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setIsSignup({ ...isSignup, [name]: value });
    } else {
      setIsLogin({ ...isLogin, [name]: value });
    }
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const userData = type === "signup" ? isSignup : isLogin;

    const action = type === "signup" ? registerUser : loginUser;
    await action(userData);

    if (type === "signup") {
      setIsSignup({ name: "", email: "", password: "" });
    } else {
      setIsLogin({ email: "", password: "" });
    }
  };

  React.useEffect(() => {
    if (isSuccessRegister && registerData?.message) {
      toast.success(registerData.message || "Signup Successful.");
    }

    if (registerError) {
      toast.error(registerError?.data?.message || "Signup Failed.");
    }

    if (isSuccesslogin && loginData?.message) {
      toast.success(loginData.message || "Login Successful.");
      navigate("/");
    }

    if (loginError) {
      toast.error(loginError?.data?.message || "Login Failed.");
    }
  }, [
    isLoadinglogin,
    loginData,
    loginError,
    isLoadingRegister,
    registerData,
    registerError,
  ]);
  return (
    <div className="flex justify-center items-center mt-[6rem] mb-[6rem]">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Create a new account and click 'Create Account' when you are
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={isSignup.name}
                  onChange={(e) => onChangeHandler(e, "signup")}
                  id="name"
                  placeholder="e.g: John Doe"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={isSignup.email}
                  onChange={(e) => onChangeHandler(e, "signup")}
                  id="email"
                  placeholder="e.g: john@doe.com"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={isSignup.password}
                  onChange={(e) => onChangeHandler(e, "signup")}
                  id="password"
                  placeholder="*****"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={isLoadingRegister}
                onClick={(e) => handleSubmit(e, "signup")}
              >
                {isLoadingRegister ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your email and password to login.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={isLogin.email}
                  onChange={(e) => onChangeHandler(e, "login")}
                  id="email"
                  placeholder="e.g: john@doe.com"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={isLogin.password}
                  onChange={(e) => onChangeHandler(e, "login")}
                  id="password"
                  placeholder="*****"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={isLoadinglogin}
                onClick={(e) => handleSubmit(e, "login")}
              >
                {isLoadinglogin ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;

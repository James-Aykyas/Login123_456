import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Divider } from 'primereact/divider';
import { Lock, Mail } from 'lucide-react';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  rememberMe: boolean;
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    rememberMe: false
  });

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSignIn = () => {
    console.log('Sign In:', { email: formData.email, password: formData.password, rememberMe: formData.rememberMe });
  };

  const handleSignUp = () => {
    console.log('Sign Up:', formData);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login clicked`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative">
          {/* Form Section */}
          <div className="p-8 pt-12">
            {/* Header with gradient background */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-t-2xl">
              <div className="text-center">
                {/* <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock size={24} className="text-white" />
                </div> */}
                <h1 className="text-2xl font-bold mb-2">Welcome</h1>
                <p className="text-gray-100 text-sm">Sign in to your account or create a new one</p>
              </div>
            </div>

              {/* Simple Header - Hidden */}
            {/* <div className="text-center mb-16">
            <TabView 
              activeIndex={activeIndex} 
              onTabChange={(e) => setActiveIndex(e.index)}
              className="custom-tabview mb-6 mt-10"
              >
              <TabPanel 
                header="Sign In" 
                leftIcon="pi pi-sign-in mr-2"
                headerClassName="text-blue-600 font-semibold"
                >
              </TabPanel>
              <TabPanel 
                header="Sign Up" 
                leftIcon="pi pi-user-plus mr-2"
                headerClassName="text-gray-600 font-semibold"
                >
              </TabPanel>
            </TabView>
                </div> */}

            {/* Dynamic Form Content */}
            <div className="space-y-6 mt-24">
              {/* TabView moved here, above email field, with no extra margin classes */}
              <TabView
                activeIndex={activeIndex}
                onTabChange={(e) => setActiveIndex(e.index)}
                className="custom-tabview mb-2 mt-10"
              >
                <TabPanel 
                  header="Sign In" 
                  leftIcon="pi pi-sign-in mr-2"
                  headerClassName="text-gray-600 font-semibold"
                >
                </TabPanel>
                <TabPanel 
                  header="Sign Up" 
                  leftIcon="pi pi-user-plus mr-2"
                  headerClassName="text-gray-600 font-semibold"
                >
                </TabPanel>
              </TabView>

              {activeIndex === 0 ? (
                // Sign In Form
                <>
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <InputText
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                  <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <InputText
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                  <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    inputId="remember"
                    checked={formData.rememberMe}
                    onChange={(e) => handleInputChange('rememberMe', e.checked)}
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600 hover:text-gray-300 cursor-pointer">
                    Remember me
                  </label>
                </div>
                <button className="text-sm text-gray-600 hover:text-gray-300 font-medium">
                  Forgot password?
                </button>
              </div>

              {/* Sign In Button */}
              <Button
                label="Sign In"
                onClick={handleSignIn}
                className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 border-0 rounded-lg text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              />

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account? 
                  <button 
                    onClick={() => setActiveIndex(1)}
                    className="text-gray-600 hover:text-gray-700 font-medium ml-1"
                  >
                    Sign up
                  </button>
                </p>
              </div>
                </>
              ) : (
                // Sign Up Form
                <>
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <InputText
                        id="firstName"
                        placeholder="First name"
                        value={formData.firstName || ''}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <InputText
                        id="lastName"
                        placeholder="Last name"
                        value={formData.lastName || ''}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <InputText
                        id="signupEmail"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                      <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <InputText
                        id="signupPassword"
                        type="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                      <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <InputText
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword || ''}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                      <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      inputId="terms"
                      checked={formData.rememberMe}
                      onChange={(e) => handleInputChange('rememberMe', e.checked)}
                      className="mt-1"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
                      I agree to the <button className="text-gray-600 hover:text-gray-700 font-medium">Terms of Service</button> and <button className="text-gray-600 hover:text-gray-700 font-medium">Privacy Policy</button>
                    </label>
                  </div>

                  {/* Sign Up Button */}
                  <Button
                    label="Create Account"
                    onClick={handleSignUp}
                    className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 border-0 rounded-lg text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                  />

                  {/* Sign In Link */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Already have an account? 
                      <button 
                        onClick={() => setActiveIndex(0)}
                        className="text-gray-600 hover:text-gray-700 font-medium ml-1"
                      >
                        Sign in
                      </button>
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Social Login Section */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-6 bg-white text-gray-600 font-medium">or connect with</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center space-x-4">
                {/* Facebook */}
                <button
                  onClick={() => handleSocialLogin('Facebook')}
                  className="w-12 h-12 bg-blue-700 hover:border-gray-200 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                
                {/* Google */}
                <button
                  onClick={() => handleSocialLogin('Google')}
                  className="w-12 h-12 bg-white border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>
                
                {/* GitHub */}
                <button
                  onClick={() => handleSocialLogin('GitHub')}
                  className="w-12 h-12 bg-gray-600 hover:bg-gray-900 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500 font-medium">
                Protected by Akyas industry-standard encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
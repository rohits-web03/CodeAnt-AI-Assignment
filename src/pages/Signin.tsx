import { useState } from 'react';
import { StatsCard } from '../components/Signin/StatCards';
import { SignInOptions } from '../components/Signin/SignInOptions';
import { DeploymentToggle } from '../components/Signin/DeploymentToggle';

export default function SignIn() {
  const [deploymentType, setDeploymentType] = useState<'saas' | 'self-hosted'>('saas');

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Stats (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#FFFFFF] p-0 relative overflow-hidden">
        <div className="w-full max-w-lg mt-20">
          <StatsCard />
        </div>
        <img 
          src="/ant-watermark.svg" 
          alt="" 
          className="absolute -bottom-20 -left-20 w-[500px] opacity-10"
        />
      </div>

      {/* Right Section - Sign In */}
      <div className="w-full bg-[#FAFAFA] lg:w-1/2 flex flex-col items-center justify-center shadow-lg p-8">
        <div className="w-[90%] bg-[#FFFFFF] border border-[#E9EAEB] rounded-xl px-6 py-4 pb-10 space-y-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6">
              <img
                src='/codeantlogo.png'
                alt="CodeAnt AI"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
            </div>
            <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
          </div>

          <div className='w-full flex justify-center items-center'>
            <DeploymentToggle 
              selected={deploymentType}
              onChange={setDeploymentType}
            />
          </div>

          <div className='w-full flex justify-center items-center'>
            <SignInOptions deploymentType={deploymentType} />
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-7">
          By signing up you agree to the{' '}
          <span className="font-semibold">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
}
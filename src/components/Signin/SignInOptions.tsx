interface SignInOptionsProps {
  deploymentType: 'saas' | 'self-hosted';
}

export function SignInOptions({ deploymentType }: SignInOptionsProps) {
  const saasOptions = [
    {
      icon: '/Github.png',
      name: 'Github',
      provider: 'github'
    },
    {
      icon: 'BitBucket.png',
      name: 'Bitbucket',
      provider: 'bitbucket'
    },
    {
      icon: 'AzureDevops.png',
      name: 'Azure Devops',
      provider: 'azure'
    },
    {
      icon: 'Gitlab.png',
      name: 'GitLab',
      provider: 'gitlab'
    }
  ];

  const selfHostedOptions = [
    {
      icon: 'Gitlab.png',
      name: 'Self Hosted GitLab',
      provider: 'gitlab'
    },
    {
      icon: 'key.png',
      name: 'Sign in with SSO',
      provider: 'sso'
    }
  ];

  const options = deploymentType === 'saas' ? saasOptions : selfHostedOptions;

  return (
    <div className="w-[75%] space-y-3">
      {options.map((option) => (
        <button
          key={option.provider}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 
                   border border-gray-300 rounded-lg hover:bg-gray-50 
                   transition-colors text-sm font-medium"
        >
          <img src={option.icon}/>
          <span>Sign in with {option.name}</span>
        </button>
      ))}
    </div>
  );
}
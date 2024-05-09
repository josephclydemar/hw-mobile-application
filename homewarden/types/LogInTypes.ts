type LogInInfo = {
    sessionId: string | null;
    loggedInAt: string | null;
};

type LogInInfoContextType = {
    logInInfo: LogInInfo;
    setLogInInfo: React.Dispatch<React.SetStateAction<LogInInfo>>;
};

export type { LogInInfo, LogInInfoContextType };

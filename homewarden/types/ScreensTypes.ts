type CurrentScreen =
    | 'home-screen'
    | 'day-records-screen'
    | 'authorized-users-screen'
    | 'add-new-authorized-users-screen'
    | 'selected-authorized-user-screen'
    | 'selected-day-records-screen'
    | 'selected-detection-screen'
    | 'login-screen';

type CurrentScreenContextType = {
    currentScreen: CurrentScreen;
    setCurrentScreen: React.Dispatch<React.SetStateAction<CurrentScreen>>;
};

type PreviousScreen =
    | 'home-screen'
    | 'day-records-screen'
    | 'authorized-users-screen'
    | 'add-new-authorized-users-screen'
    | 'selected-authorized-user-screen'
    | 'selected-day-records-screen'
    | 'selected-detection-screen'
    | 'login-screen';

type PreviousScreenContextType = {
    previousScreen: PreviousScreen;
    setPreviousScreen: React.Dispatch<React.SetStateAction<PreviousScreen>>;
};

export type { CurrentScreen, CurrentScreenContextType, PreviousScreen, PreviousScreenContextType };

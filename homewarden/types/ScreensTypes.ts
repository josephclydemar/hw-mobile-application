type CurrentScreen =
    | 'home-screen'
    | 'day-records-screen'
    | 'authorized-users-screen'
    | 'add-new-authorized-users-screen'
    | 'selected-authorized-user-screen'
    | 'selected-day-records-screen'
    | 'selected-detection-screen';

type CurrentScreenContextType = {
    currentScreen: CurrentScreen;
    setCurrentScreen: React.Dispatch<React.SetStateAction<CurrentScreen>>;
};

export type { CurrentScreen, CurrentScreenContextType };

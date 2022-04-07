import { FC, useReducer } from "react";
import { uiReducer, UIContext } from "./";

export interface UIState {
    isMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    isMenuOpen: false,
};

export const UIProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const toggleSideMenu = () => {
        dispatch({ type: "[UI] - ToggleMenu" });
    };

    return (
        <UIContext.Provider
            value={{
                ...state,

                // metodos
                toggleSideMenu,
            }}
        >
            {children}
        </UIContext.Provider>
    );
};

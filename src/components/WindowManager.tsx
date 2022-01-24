import { ThemeProvider } from "emotion-theming";
import { defaultsDeep } from "lodash";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { AppTheme } from "../AppTheme";
import { WindowManagerContextProvider } from "../context";
import { ContentGetter } from "./window/WindowContent";
import { WindowsContainer } from "./WindowsContainer";

const defaultTheme = { backgroundOpacity: 0.9, backdropFilter: "blur(16px)" };

interface WindowManagerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  theme: AppTheme;
  contentGetter: ContentGetter;
}

export function WindowManager({ theme, contentGetter, children, ...props }: WindowManagerProps): JSX.Element {
  return (
    <WindowManagerContextProvider>
      <div {...props}>
        {children}
        <ThemeProvider<AppTheme> theme={(outerTheme = {}) => defaultsDeep(theme, outerTheme, defaultTheme)}>
          <WindowsContainer contentGetter={contentGetter} />
        </ThemeProvider>
      </div>
    </WindowManagerContextProvider>
  );
}

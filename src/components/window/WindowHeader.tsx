import { css, cx } from "emotion";
import React, { useMemo } from "react";
import { DragHandle } from "../DragHandle";
import { ContentClasses } from "./DefaultContent";
import * as defaultHeaderComponents from "./header";
import { HeaderButtons } from "./HeaderButtons";

export interface WindowHeaderProps {
  title?: string;
  closeDialog?: () => void;
  zoomDialog?: (value?: boolean) => void;
  isMaximized?: boolean;
  isStatic?: boolean;
  classnames?: Pick<ContentClasses, "header" | "headerButtons">;
  components?: Partial<typeof defaultHeaderComponents>;
}

const flexRow = css({
  display: "flex",
  alignItems: "stretch",
  flexDirection: "row",
});

export function WindowHeader({
  title,
  classnames,
  closeDialog,
  zoomDialog,
  isStatic,
  isMaximized,
  components = {},
}: WindowHeaderProps): JSX.Element {
  const el = useMemo(
    () => <header className={cx(flexRow, css({ justifyContent: "space-between" }))} onDoubleClick={() => zoomDialog?.()} />,
    [zoomDialog],
  );

  const {
    HeaderButtonClose: Close,
    HeaderButtonZoom: Zoom,
    HeaderTitle: Title,
  } = useMemo(
    () => ({
      ...defaultHeaderComponents,
      ...components,
    }),
    [components],
  );

  return (
    <DragHandle el={el} disabled={isStatic}>
      {title && <Title className={classnames.header}>{title}</Title>}
      <HeaderButtons className={cx(flexRow, classnames.headerButtons)}>
        {zoomDialog && <Zoom zoomDialog={zoomDialog} isMaximized={isMaximized} />}
        {closeDialog && <Close closeDialog={closeDialog} />}
      </HeaderButtons>
    </DragHandle>
  );
}

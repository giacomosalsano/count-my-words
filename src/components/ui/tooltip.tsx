import React from 'react'

import * as BaseTooltip from '@radix-ui/react-tooltip'

interface TooltipProps {
  children: React.ReactNode
  content: string | React.ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  return (
    <BaseTooltip.Provider delayDuration={100}>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger>{children}</BaseTooltip.Trigger>
        <BaseTooltip.Portal>
          <BaseTooltip.Content className="text-text-white border-2 border-border data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-2xl bg-menu-bg px-[15px] py-[10px]  leading-none shadow-xs xl:shadow-xl shadow-shadow will-change-[transform,opacity] z-[60]">
            <span className="font-bold">{content}</span>
            <BaseTooltip.Arrow className="fill-menu-bg" />
          </BaseTooltip.Content>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  )
}

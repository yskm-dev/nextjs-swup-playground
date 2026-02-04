import { createTimeline, waapi } from 'animejs';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type transitonOutProps = {
  href: string;
  router: AppRouterInstance;
};
/**
 * Fade
 */
export function fadeIn() {
  const timeline = createTimeline();
  timeline
    .label('start', 0)
    .set('#wrapper', {
      opacity: 0,
    })
    .add('#wrapper', {
      opacity: 1,
      duration: 300,
    })
    .play();
  return timeline;
}

export function fadeOut({ href, router }: transitonOutProps) {
  const timeline = createTimeline();
  timeline
    .label('start', 0)
    .set('#wrapper', {
      opacity: 1,
    })
    .add('#wrapper', {
      opacity: 0,
      duration: 300,
      onComplete: () => {
        // Do nothing for now
        document.documentElement.dataset.transitionType = 'fade';
        router.push(href);
      },
    })
    .play();
  return timeline;
}

/**
 * Panel
 */
export function panelIn() {
  const timeline = createTimeline();
  timeline
    .label('start', 0)
    .set(['#banner1', '#banner2', '#banner3', '#banner4'], {
      translateY: '0%',
    })
    .add(['#banner1', '#banner2', '#banner3', '#banner4'], {
      translateY: '-100%',
      easing: 'easeInOutQuart',
      duration: 300,
      delay: (el, i) => i * 50,
    })
    .play();
  return timeline;
}

export function panelOut({ href, router }: transitonOutProps) {
  const timeline = createTimeline();
  timeline
    .label('start', 0)
    .set(['#banner1', '#banner2', '#banner3', '#banner4'], {
      translateY: '100%',
    })
    .add(['#banner1', '#banner2', '#banner3', '#banner4'], {
      translateY: '0%',
      easing: 'easeInOutQuart',
      duration: 300,
      delay: (el, i) => i * 50,
      onComplete: () => {
        // Do nothing for now
        document.documentElement.dataset.transitionType = 'panel';
        router.push(href);
      },
    })
    .play();
  return timeline;
}

/**
 * Zoom
 */
export function zoomIn() {
  const timeline = createTimeline();

  const wrapper = waapi.animate('#wrapper', {
    duration: 400,
    translateZ: {
      from: -500,
      to: 0,
    },
    opacity: { from: 0, to: 1 },
  });
  const banner = waapi.animate(
    ['#banner1', '#banner2', '#banner3', '#banner4'],
    {
      duration: 400,
      y: '-100%',
    }
  );

  timeline.sync(banner, 0).sync(wrapper, 0).play();
  return timeline;
}

export function zoomOut({ href, router }: transitonOutProps) {
  const timeline = createTimeline();
  timeline
    .label('start', 0)
    .set(['#banner1', '#banner2', '#banner3', '#banner4'], {
      y: '100%',
    })
    .add(['#banner1', '#banner2', '#banner3', '#banner4'], {
      y: '0%',
      easing: 'easeInOutQuart',
      duration: 400,
      onComplete: () => {
        // Do nothing for now
        document.documentElement.dataset.transitionType = 'zoom';
        requestAnimationFrame(() => {
          router.push(href);
        });
      },
    })
    .play();
  return timeline;
}

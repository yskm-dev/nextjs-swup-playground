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
  console.log('fadeIn');
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
  console.log('fadeOut');
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
        requestAnimationFrame(() => {
          setTimeout(() => {
            router.push(href);
          }, 100);
        });
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
      ease: 'in(3)',
      duration: 300,
      delay: (el, i) => i * 50,
    })
    .play();
  return timeline;
}

export function panelOut({ href, router }: transitonOutProps) {
  console.log('panelOut');
  const timeline = createTimeline();
  timeline
    .label('start', 0)
    .add(['#banner1', '#banner2', '#banner3', '#banner4'], {
      translateY: {
        from: '100%',
        to: '0%',
      },
      ease: 'out(3)',
      duration: 300,
      delay: (el, i) => i * 50,
      onComplete: () => {
        // Do nothing for now
        document.documentElement.dataset.transitionType = 'panel';
        requestAnimationFrame(() => {
          setTimeout(() => {
            router.push(href);
          }, 100);
        });
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
    duration: 600,
    translateZ: {
      from: -1000,
      to: 0,
      ease: 'out(3)',
    },
    opacity: { from: 0, to: 1, ease: 'linear' },
  });
  const banner = waapi.animate(
    ['#banner1', '#banner2', '#banner3', '#banner4'],
    {
      duration: 400,
      ease: 'out(3)',
      y: {
        from: '0%',
        to: '-100%',
      },
    }
  );

  timeline.sync(banner, 0).sync(wrapper, 0).play();
  return timeline;
}

export function zoomOut({ href, router }: transitonOutProps) {
  const timeline = createTimeline();
  timeline
    .add(['#banner1', '#banner2', '#banner3', '#banner4'], {
      y: {
        from: '100%',
        to: '0%',
      },
      ease: 'in(3)',
      duration: 400,
      onComplete: () => {
        // Do nothing for now
        document.documentElement.dataset.transitionType = 'zoom';
        requestAnimationFrame(() => {
          setTimeout(() => {
            router.push(href);
          }, 100);
        });
      },
    })
    .play();
  return timeline;
}

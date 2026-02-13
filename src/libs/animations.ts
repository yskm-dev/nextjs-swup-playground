import { createTimeline } from 'animejs';

/**
 * Fade
 */
export function fadeIn(): Promise<void> {
  return new Promise((resolve) => {
    const timeline = createTimeline({
      onComplete: () => resolve(),
    });
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
  });
}

export function fadeOut(): Promise<void> {
  return new Promise((resolve) => {
    const timeline = createTimeline({
      onComplete: () => resolve(),
    });
    timeline
      .label('start', 0)
      .set('#wrapper', {
        opacity: 1,
      })
      .add('#wrapper', {
        opacity: 0,
        duration: 300,
      })
      .play();
  });
}

/**
 * Panel
 */
export function panelIn(): Promise<void> {
  return new Promise((resolve) => {
    const timeline = createTimeline({
      onComplete: () => resolve(),
    });
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
  });
}

export function panelOut(): Promise<void> {
  return new Promise((resolve) => {
    const timeline = createTimeline({
      onComplete: () => resolve(),
    });
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
      })
      .play();
  });
}

/**
 * Zoom
 */
export function zoomIn(): Promise<void> {
  return new Promise((resolve) => {
    const timeline = createTimeline({
      onComplete: () => resolve(),
    });
    timeline
      .label('start', 0)
      .add(
        '#wrapper',
        {
          translateZ: {
            from: -1000,
            to: 0,
            ease: 'out(3)',
          },
          opacity: { from: 0, to: 1, ease: 'linear' },
          duration: 600,
        },
        'start'
      )
      .add(
        ['#banner1', '#banner2', '#banner3', '#banner4'],
        {
          translateY: {
            from: '0%',
            to: '-100%',
          },
          ease: 'out(3)',
          duration: 400,
        },
        'start'
      )
      .play();
  });
}

export function zoomOut(): Promise<void> {
  return new Promise((resolve) => {
    const timeline = createTimeline({
      onComplete: () => resolve(),
    });
    timeline
      .add(['#banner1', '#banner2', '#banner3', '#banner4'], {
        y: {
          from: '100%',
          to: '0%',
        },
        ease: 'in(3)',
        duration: 400,
      })
      .play();
  });
}

import { memo } from 'react';

const ChildInput = memo(
  ({
    changeText,
  }: {
    changeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => {
    console.log('ChildInput');

    return (
      <>
        <input type="text" onChange={changeText} />
        <p>ChildInput component</p>
      </>
    );
  }
);

ChildInput.displayName = 'ChildInput';

export { ChildInput };

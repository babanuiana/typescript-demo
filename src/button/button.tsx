import React, { PureComponent } from 'react';

type Props = {
  children: JSX.Element | string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'default' | 'primary' | 'danger' | 'etc.';
};

class Button extends PureComponent<Props> {
  static defaultProps = {
    onClick: () => null,
    className: '',
    color: 'red',
  };

  render() {
    const { children, className, onClick } = this.props;
    return (
      <button className={`button${className ? ` ${className}` : ''}`} onClick={onClick}>
        {children}
      </button>
    );
  }
}

// const Button: React.FC<Props> = ({ children, className, onClick }: Props) => (
//   <button className={`button${className ? ` ${className}` : ''}`} onClick={onClick}>
//     {children}
//   </button>
// );

export default Button;

import classnames from 'classnames';
import "./Button.css"

interface ButtonProps {
    size?: "small" | "medium" | "large";
    children?: string | number;
    primary?: boolean;
    onClick?: any;
    icon?: string;
}

const Button = ({
    primary = true,
    onClick,
    icon,
    children
} : ButtonProps) => {

    const getClassnames = () => {
        const classNamesObj = {
            "button": true,
            "primary": primary
        }
        return classnames(classNamesObj);
    }

    return (
        <button className={getClassnames()} onClick={onClick}>
            {icon && <div className="button-icon">{icon}</div>}
            {children}
        </button>
    )
}

export default Button;
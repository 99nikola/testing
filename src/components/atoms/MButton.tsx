import { Button, Color, PropTypes } from "@material-ui/core";

const MButton: React.FC<{
    text: string,
    onClick?: any,
    className?: string,
    disabled?: boolean,
    color?: PropTypes.Color
}> = ({ onClick, className, text, disabled=false, color="primary" }) => {
    return (
        <Button
            className={className}
            variant="contained"
            onClick={onClick}
            color={color}
            disabled={disabled}
        >{text} 
        </Button>
    );
}

export default MButton;
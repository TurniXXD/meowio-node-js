import styles from './icons.module.scss'

import Cancel from './cancel';
import DropDown from './dropDown';
import ArrowDown from './arrowUp';
import ArrowUp from './arrowUp';
import Edit from './edit';
import Remove from './remove';

export enum Icons {
  Cancel = 'cancel',
  DropDown = 'drop-down',
  ArrowDown = 'arrow-down',
  ArrowUp = 'arrow-up',
  Edit = 'edit',
  Remove = 'remove',
}

const IconMap: { [key in Icons]: React.ComponentType } = {
  [Icons.Cancel]: Cancel,
  [Icons.DropDown]: DropDown,
  [Icons.ArrowDown]: ArrowDown,
  [Icons.ArrowUp]: ArrowUp,
  [Icons.Edit]: Edit,
  [Icons.Remove]: Remove,
};

// Function to dynamically render the icon based on the enum value
export const iconsResolver = ({
  icon,
  onClick,
}: {
  icon: Icons;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const IconComponent = IconMap[icon];
  if (IconComponent) {
    if (onClick) {
      return (
        <button onClick={onClick} className={styles.iconsButton}>
          <IconComponent />
        </button>
      );
    }

    return <IconComponent />;
  }
  return null;
};

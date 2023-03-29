import React, { useState } from "react";
import folderIcon from "../../../assets/folder-icon.svg";
import fileIcon from "../../../assets/file-icon.svg";
import { styles } from "./TreeStyles";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

interface TreeProps {
  label: string;
  children: any;
}

interface TreeData {
  [key: string]: {
    __children: any;
  };
}

function Tree({ label, children = [] }: TreeProps) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = (): void => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.container}>
      <div onClick={handleToggle} style={styles.container}>
        {children &&
          children.length > 0 &&
          (expanded ? <IoIosArrowDown /> : <IoIosArrowForward />)}
        {children && children.length > 0 ? (
          <img
            src={folderIcon}
            alt="folder icon"
            style={styles.arrow}
          />
        ) : (
          <img src={fileIcon} alt="file icon" style={styles.arrow} />
        )}
        <div style={styles.label}>{label}</div>
      </div>

      {children && expanded && (
        <div style={styles.child}>
          {children.map((child: TreeData, i: number) => (
            <Tree
              key={i}
              label={Object.keys(child)[0]}
              children={child[Object.keys(child)[0]].__children}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// export default Tree;
export default Tree;
export type { TreeData };

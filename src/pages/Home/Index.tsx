import axios from "axios";
import React, { useState } from "react";
import Tree, { TreeData } from "../../components/Tree/Tree";
import BeatLoader from "react-spinners/BeatLoader";
import { styles } from "./HomeStyles";

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [treeData, setTreeData] = useState<TreeData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // Handle Submit
  const handleSubmit = async (): Promise<void> => {
    try {
      setTreeData(null);
      setError("");
      setLoading(true);
      const response = await axios.get<{ html: TreeData }>(
        `http://localhost:3000/api/v1/parsedhtml?url=${encodeURIComponent(url)}`
      );
      const json = response.data;
      setTreeData(json.html);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  // Handle Clear
  const handleClear = (): void => {
    try {
      setError("");
      setTreeData(null);
      setError("")
      setUrl("");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.folder}>
          <h2 style={styles.header}>HTML Folder Structure</h2>
          {loading && !treeData && (
            <div style={styles.loader}>
              <BeatLoader color="#173f80" size="20px" />
            </div>
          )}
          {treeData && <Tree label="html" children={treeData.__children} />}  
        </div>
        {/* error message */}
        {error && !loading && <p style={styles.error}>Error occured</p>}
      </div>

      <div style={styles.userInput}>
        <h2>Input</h2>
        <input
          type="text"
          value={url}
          style={styles.input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUrl(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key == "Enter") {
              handleSubmit();
            }
          }}
        />
        <div style={styles.button}>
          <button style={styles.button1} onClick={handleClear}>
            Clear
          </button>
          <button style={styles.button2} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

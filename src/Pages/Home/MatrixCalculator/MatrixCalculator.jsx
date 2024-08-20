import React, { useState } from "react";

const MatrixCalculator = () => {
  const [matrixA, setMatrixA] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [matrixB, setMatrixB] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [resultMatrix, setResultMatrix] = useState(null);
  const [operation, setOperation] = useState("add");

  const handleMatrixChange = (matrix, setMatrix, row, col, value) => {
    const newMatrix = matrix.map((rowArr, rowIndex) =>
      rowArr.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? Number(value) : cell
      )
    );
    setMatrix(newMatrix);
  };

  const calculateResult = () => {
    let result;
    switch (operation) {
      case "add":
        result = matrixA.map((rowArr, rowIndex) =>
          rowArr.map((cell, colIndex) => cell + matrixB[rowIndex][colIndex])
        );
        break;
      case "subtract":
        result = matrixA.map((rowArr, rowIndex) =>
          rowArr.map((cell, colIndex) => cell - matrixB[rowIndex][colIndex])
        );
        break;
      case "multiply":
        result = matrixA.map((rowArr, rowIndex) =>
          rowArr.map((_, colIndex) =>
            rowArr.reduce(
              (sum, cell, idx) => sum + cell * matrixB[idx][colIndex],
              0
            )
          )
        );
        break;
      case "transposeA":
        result = matrixA[0].map((_, colIndex) =>
          matrixA.map((row) => row[colIndex])
        );
        break;
      case "transposeB":
        result = matrixB[0].map((_, colIndex) =>
          matrixB.map((row) => row[colIndex])
        );
        break;
      case "determinantA":
        result = [[determinant(matrixA)]];
        break;
      case "determinantB":
        result = [[determinant(matrixB)]];
        break;
      case "inverseA":
        result = inverse(matrixA);
        break;
      case "inverseB":
        result = inverse(matrixB);
        break;
      default:
        result = [];
    }
    setResultMatrix(result);
  };

  const determinant = (matrix) => {
    if (matrix.length === 2) {
      return (
        matrix[0][0] * matrix[1][1] -
        matrix[0][1] * matrix[1][0]
      );
    }
    // Extend for larger matrices if needed
    return null;
  };

  const inverse = (matrix) => {
    if (matrix.length === 2) {
      const det = determinant(matrix);
      if (det === 0) return null;
      return [
        [matrix[1][1] / det, -matrix[0][1] / det],
        [-matrix[1][0] / det, matrix[0][0] / det],
      ];
    }
    // Extend for larger matrices if needed
    return null;
  };

  const renderMatrixInput = (matrix, setMatrix) => (
    <div className="grid grid-cols-2 gap-2 bg-white">
      {matrix.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            type="number"
            value={cell}
            onChange={(e) =>
              handleMatrixChange(
                matrix,
                setMatrix,
                rowIndex,
                colIndex,
                e.target.value
              )
            }
            className="w-15 p-2 border border-gray-300 rounded bg-white"
          />
        ))
      )}
    </div>
  );

  return (
    <div className="bg-gray-100 h-screen pt-20">
      <div className="flex justify-center  bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold text-center mb-4 text-black">
            Matrix Calculator
          </h1>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-black">Matrix A</h2>
            {renderMatrixInput(matrixA, setMatrixA)}
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-black">Matrix B</h2>
            {renderMatrixInput(matrixB, setMatrixB)}
          </div>

          <div className="mb-4">
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black"
            >
              <option value="add">Add Matrices</option>
              <option value="subtract">Subtract Matrices</option>
              <option value="multiply">Multiply Matrices</option>
              <option value="transposeA">Transpose Matrix A</option>
              <option value="transposeB">Transpose Matrix B</option>
              <option value="determinantA">Determinant of Matrix A</option>
              <option value="determinantB">Determinant of Matrix B</option>
              <option value="inverseA">Inverse of Matrix A</option>
              <option value="inverseB">Inverse of Matrix B</option>
            </select>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={calculateResult}
              className="py-2 px-5 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Calculate
            </button>
          </div>

          {resultMatrix && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2 text-black">Result</h2>
              <div className="grid grid-cols-2 gap-2">
                {resultMatrix.map((row, rowIndex) =>
                  row.map((cell, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className="w-12 p-2 border border-gray-300 rounded text-center"
                    >
                      {cell}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatrixCalculator;

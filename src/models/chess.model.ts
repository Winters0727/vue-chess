import {
  AbstractPiece,
  BoardCell,
  BoardData,
  Column,
  Columns,
  Row,
  Rows,
  PieceClass,
  PieceArguments,
} from '@/types';

export const BOARD: Record<BoardCell, BoardData> = {
  A1: { position: [7, 0], color: 'black' },
  A2: { position: [6, 0], color: 'white' },
  A3: { position: [5, 0], color: 'black' },
  A4: { position: [4, 0], color: 'white' },
  A5: { position: [3, 0], color: 'black' },
  A6: { position: [2, 0], color: 'white' },
  A7: { position: [1, 0], color: 'black' },
  A8: { position: [0, 0], color: 'white' },
  B1: { position: [7, 1], color: 'black' },
  B2: { position: [6, 1], color: 'white' },
  B3: { position: [5, 1], color: 'black' },
  B4: { position: [4, 1], color: 'white' },
  B5: { position: [3, 1], color: 'black' },
  B6: { position: [2, 1], color: 'white' },
  B7: { position: [1, 1], color: 'black' },
  B8: { position: [0, 1], color: 'white' },
  C1: { position: [7, 2], color: 'black' },
  C2: { position: [6, 2], color: 'white' },
  C3: { position: [5, 2], color: 'black' },
  C4: { position: [4, 2], color: 'white' },
  C5: { position: [3, 2], color: 'black' },
  C6: { position: [2, 2], color: 'white' },
  C7: { position: [1, 2], color: 'black' },
  C8: { position: [0, 2], color: 'white' },
  D1: { position: [7, 3], color: 'black' },
  D2: { position: [6, 3], color: 'white' },
  D3: { position: [5, 3], color: 'black' },
  D4: { position: [4, 3], color: 'white' },
  D5: { position: [3, 3], color: 'black' },
  D6: { position: [2, 3], color: 'white' },
  D7: { position: [1, 3], color: 'black' },
  D8: { position: [0, 3], color: 'white' },
  E1: { position: [7, 4], color: 'black' },
  E2: { position: [6, 4], color: 'white' },
  E3: { position: [5, 4], color: 'black' },
  E4: { position: [4, 4], color: 'white' },
  E5: { position: [3, 4], color: 'black' },
  E6: { position: [2, 4], color: 'white' },
  E7: { position: [1, 4], color: 'black' },
  E8: { position: [0, 4], color: 'white' },
  F1: { position: [7, 5], color: 'black' },
  F2: { position: [6, 5], color: 'white' },
  F3: { position: [5, 5], color: 'black' },
  F4: { position: [4, 5], color: 'white' },
  F5: { position: [3, 5], color: 'black' },
  F6: { position: [2, 5], color: 'white' },
  F7: { position: [1, 5], color: 'black' },
  F8: { position: [0, 5], color: 'white' },
  G1: { position: [7, 6], color: 'black' },
  G2: { position: [6, 6], color: 'white' },
  G3: { position: [5, 6], color: 'black' },
  G4: { position: [4, 6], color: 'white' },
  G5: { position: [3, 6], color: 'black' },
  G6: { position: [2, 6], color: 'white' },
  G7: { position: [1, 6], color: 'black' },
  G8: { position: [0, 6], color: 'white' },
  H1: { position: [7, 7], color: 'black' },
  H2: { position: [6, 7], color: 'white' },
  H3: { position: [5, 7], color: 'black' },
  H4: { position: [4, 7], color: 'white' },
  H5: { position: [3, 7], color: 'black' },
  H6: { position: [2, 7], color: 'white' },
  H7: { position: [1, 7], color: 'black' },
  H8: { position: [0, 7], color: 'white' },
};

const VERTICAL_DIRECTION = {
  row: [1, -1],
  col: [0, 0],
};

const HORIZONTAL_DIRECTION = {
  row: [0, 0],
  col: [1, -1],
};

const DIAGONAL_DIRECTION = {
  row: [1, 1, -1, -1],
  col: [1, -1, 1, -1],
};

const ALL_DIRECTION = {
  row: VERTICAL_DIRECTION.row
    .concat(HORIZONTAL_DIRECTION.row)
    .concat(DIAGONAL_DIRECTION.row),
  col: VERTICAL_DIRECTION.col
    .concat(HORIZONTAL_DIRECTION.col)
    .concat(DIAGONAL_DIRECTION.col),
};

export const createRow = (column: Column): Rows[] =>
  Array.from({ length }).map((_, index) => `${column}${index + 1}` as Rows);

export const createColumn = (row: Row): Columns[] =>
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(
    (column) => `${column}${row}` as Columns
  );

class Piece implements AbstractPiece {
  readonly pieceType: PieceClass;
  isPromoted: boolean;
  id: string;
  color: 'black' | 'white';
  position: BoardCell;
  positionHistory: BoardCell[];
  availablePosition: BoardCell[];

  constructor({ id, color, pieceType, position }: PieceArguments) {
    this.id = id;
    this.color = color;
    this.pieceType = pieceType;
    this.position = position;
    this.positionHistory = [position];
    this.availablePosition = [];
    this.isPromoted = false;
  }

  setPosition(position: BoardCell) {
    this.position = position;
  }

  updatePositionHistory(position: BoardCell) {
    this.positionHistory.push(position);
  }

  calculateAvailablePosition() {
    return [];
  }
}

export class Pawn extends Piece {
  constructor({ id, color, position }: Omit<PieceArguments, 'pieceType'>) {
    super({
      id,
      color,
      position,
      pieceType: 'pawn',
    });
  }
}

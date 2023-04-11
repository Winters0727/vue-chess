import {
  AbstractPiece,
  BoardCell,
  Column,
  Columns,
  Row,
  Rows,
  PieceClass,
  PieceArguments,
} from '@/types';

export const BOARD: Record<BoardCell, [number, number, 'black' | 'white']> = {
  A1: [7, 0, 'black'],
  A2: [6, 0, 'white'],
  A3: [5, 0, 'black'],
  A4: [4, 0, 'white'],
  A5: [3, 0, 'black'],
  A6: [2, 0, 'white'],
  A7: [1, 0, 'black'],
  A8: [0, 0, 'white'],
  B1: [7, 1, 'black'],
  B2: [6, 1, 'white'],
  B3: [5, 1, 'black'],
  B4: [4, 1, 'white'],
  B5: [3, 1, 'black'],
  B6: [2, 1, 'white'],
  B7: [1, 1, 'black'],
  B8: [0, 1, 'white'],
  C1: [7, 2, 'black'],
  C2: [6, 2, 'white'],
  C3: [5, 2, 'black'],
  C4: [4, 2, 'white'],
  C5: [3, 2, 'black'],
  C6: [2, 2, 'white'],
  C7: [1, 2, 'black'],
  C8: [0, 2, 'white'],
  D1: [7, 3, 'black'],
  D2: [6, 3, 'white'],
  D3: [5, 3, 'black'],
  D4: [4, 3, 'white'],
  D5: [3, 3, 'black'],
  D6: [2, 3, 'white'],
  D7: [1, 3, 'black'],
  D8: [0, 3, 'white'],
  E1: [7, 4, 'black'],
  E2: [6, 4, 'white'],
  E3: [5, 4, 'black'],
  E4: [4, 4, 'white'],
  E5: [3, 4, 'black'],
  E6: [2, 4, 'white'],
  E7: [1, 4, 'black'],
  E8: [0, 4, 'white'],
  F1: [7, 5, 'black'],
  F2: [6, 5, 'white'],
  F3: [5, 5, 'black'],
  F4: [4, 5, 'white'],
  F5: [3, 5, 'black'],
  F6: [2, 5, 'white'],
  F7: [1, 5, 'black'],
  F8: [0, 5, 'white'],
  G1: [7, 6, 'black'],
  G2: [6, 6, 'white'],
  G3: [5, 6, 'black'],
  G4: [4, 6, 'white'],
  G5: [3, 6, 'black'],
  G6: [2, 6, 'white'],
  G7: [1, 6, 'black'],
  G8: [0, 6, 'white'],
  H1: [7, 7, 'black'],
  H2: [6, 7, 'white'],
  H3: [5, 7, 'black'],
  H4: [4, 7, 'white'],
  H5: [3, 7, 'black'],
  H6: [2, 7, 'white'],
  H7: [1, 7, 'black'],
  H8: [0, 7, 'white'],
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

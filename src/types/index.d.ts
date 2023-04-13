export type Row = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type Column = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

type ARow = 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8';
type BRow = 'B1' | 'B2' | 'B3' | 'B4' | 'B5' | 'B6' | 'B7' | 'B8';
type CRow = 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7' | 'C8';
type DRow = 'D1' | 'D2' | 'D3' | 'D4' | 'D5' | 'D6' | 'D7' | 'D8';
type ERow = 'E1' | 'E2' | 'E3' | 'E4' | 'E5' | 'E6' | 'E7' | 'E8';
type FRow = 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8';
type GRow = 'G1' | 'G2' | 'G3' | 'G4' | 'G5' | 'G6' | 'G7' | 'G8';
type HRow = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'H7' | 'H8';

type Column1 = 'A1' | 'B1' | 'C1' | 'D1' | 'E1' | 'F1' | 'G1' | 'H1';
type Column2 = 'A2' | 'B2' | 'C2' | 'D2' | 'E2' | 'F2' | 'G2' | 'H2';
type Column3 = 'A3' | 'B3' | 'C3' | 'D3' | 'E3' | 'F3' | 'G3' | 'H3';
type Column4 = 'A4' | 'B4' | 'C4' | 'D4' | 'E4' | 'F4' | 'G4' | 'H4';
type Column5 = 'A5' | 'B5' | 'C5' | 'D5' | 'E5' | 'F5' | 'G5' | 'H5';
type Column6 = 'A6' | 'B6' | 'C6' | 'D6' | 'E6' | 'F6' | 'G6' | 'H6';
type Column7 = 'A7' | 'B7' | 'C7' | 'D7' | 'E7' | 'F7' | 'G7' | 'H7';
type Column8 = 'A8' | 'B8' | 'C8' | 'D8' | 'E8' | 'F8' | 'G8' | 'H8';

export type Direction = {
  row: number[];
  col: number[];
};

export type GameColor = 'black' | 'white';

export type Rows = ARow | BRow | CRow | DRow | ERow | FRow | GRow | HRow;
export type Columns =
  | Column1
  | Column2
  | Column3
  | Column4
  | Column5
  | Column6
  | Column7
  | Column8;

export type BoardCell = Rows & Columns;

type BoardData = {
  position: [number, number];
  color: GameColor;
};

export type PieceClass =
  | 'pawn'
  | 'rook'
  | 'knight'
  | 'bishop'
  | 'queen'
  | 'king';

export type PieceArguments = {
  id: string;
  pieceType: PieceClass;
  color: GameColor;
  direction: Direction;
  position: BoardCell;
};

export abstract class AbstractPlayer {
  color: GameColor;
}

export abstract class AbstractPiece {
  readonly pieceType: PieceClass;
  isPromoted: boolean;
  id: string;
  color: GameColor;
  position: BoardCell;
  positionHistory: BoardCell[];
  availablePosition: BoardCell[];

  setPosition: (position: BoardCell) => void;
  updatePositionHistory: (position: BoardCell) => void;
  abstract calculateAvailablePosition: () => BoardCell[];
}

export abstract class AbstractBoardCell {
  readonly cellColor: GameColor;
  id: BoardCell;
  position: [number, number];
  locatedPiece: AbstractPiece | null;

  isEmpty: () => boolean;
}

export abstract class AbstractBoard {
  cells: {
    [key in BoardCell]: AbstractBoardCell;
  };
}

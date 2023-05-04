import {
  PacketCarDamageDataParser,
  PacketCarSetupDataParser,
  PacketCarStatusDataParser,
  PacketCarTelemetryDataParser,
  PacketEventDataParser,
  PacketFinalClassificationDataParser,
  PacketLapDataParser,
  PacketLobbyInfoDataParser,
  PacketMotionDataParser,
  PacketParticipantsDataParser,
  PacketSessionDataParser,
  PacketSessionHistoryDataParser,
  PacketTyreSetsDataParser,
} from './parsers/packets';

export interface Options {
  port?: number;
  forwardAddresses?: Address[] | undefined;
  skipParsing?: boolean;
}

export interface Address {
  port: number;
  ip?: string;
}

export interface ParsedMessage {
  packetID: string;
  packetData:
    | PacketTyreSetsDataParser
    | PacketSessionHistoryDataParser
    | PacketSessionDataParser
    | PacketMotionDataParser
    | PacketLapDataParser
    | PacketEventDataParser
    | PacketParticipantsDataParser
    | PacketCarSetupDataParser
    | PacketCarTelemetryDataParser
    | PacketCarStatusDataParser
    | PacketCarDamageDataParser
    | PacketFinalClassificationDataParser
    | PacketLobbyInfoDataParser
    | null;
}

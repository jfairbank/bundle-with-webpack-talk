#!/bin/bash

FONT_SIZE=50
FONT_FAMILY=Hack
STYLE=seashell
SYNTAX=js
OUTPUT=rtf
FILTER=false
START=1

while getopts "s:S:k:K:L:f" OPT; do
  case $OPT in
    s)
      STYLE="$OPTARG"
      ;;
    S)
      SYNTAX="$OPTARG"
      ;;
    k)
      FONT_FAMILY="$OPTARG"
      ;;
    K)
      FONT_SIZE="$OPTARG"
      ;;
    L)
      START="$OPTARG"
      ;;
    f)
      FILTER=true
      ;;
    \?)
      exit 1
      ;;
  esac
done

shift $((OPTIND-1))

FILENAME="$1"

if [[ -z "$FILENAME" ]]; then
  >&2 echo 'Please supply filename'
  exit 1
fi

if [[ "$FILTER" == true ]]; then
  CONTENTS=$(cat "$FILENAME" | grep -Ev "^(?:import|export)")
else
  CONTENTS=$(cat "$FILENAME")
fi

echo "$CONTENTS" | tail -n+"$START"| highlight -s "$STYLE" -O "$OUTPUT" -S "$SYNTAX" -K "$FONT_SIZE" -k "$FONT_FAMILY" | tr -d '\n' | pbcopy
